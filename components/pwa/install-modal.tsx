"use client"

import { createRoot } from 'react-dom/client'
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { X, Download, Smartphone, ArrowRight, Share2 } from "lucide-react"
import { detectOS } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'

const getInstallInstructions = (os: string) => {
  switch(os) {
    case 'iOS':
      return {
        title: 'Add to Home Screen',
        steps: [
          { text: 'Tap the Share button', icon: 'share' },
          { text: 'Select "Add to Home Screen"', icon: 'add_to_home_screen' },
          { text: 'Confirm the installation', icon: 'check' }
        ],
        icon: '/icons/ios-install.png'
      }
    case 'Android':
      return {
        title: 'Install App',
        steps: [
          { text: 'Tap the menu button (⋮)', icon: 'more_vert' },
          { text: 'Select "Install App"', icon: 'install_desktop' },
          { text: 'Confirm the installation', icon: 'check' }
        ],
        icon: '/icons/android-install.png'
      }
    default:
      return {
        title: 'Install App',
        steps: [
          { text: 'Click the install button in your browser', icon: 'download' },
          { text: 'Confirm the installation', icon: 'check' },
          { text: 'Launch from your desktop', icon: 'launch' }
        ],
        icon: '/icons/default-install.png'
      }
  }
}

interface InstallStep {
  text: string
  icon: string
}

interface InstallModalProps {
  title: string
  steps: InstallStep[]
  icon: string
  onClose?: () => void
}

export function showInstallModal(options?: Partial<Omit<InstallModalProps, 'onClose'>>): Promise<void> {
  return new Promise((resolve) => {
    trackEvent('pwa_install_prompt_shown')
    
    const os = detectOS()
    const defaultInstructions = getInstallInstructions(os)
    const mergedOptions = {
      ...defaultInstructions,
      ...options
    }

    const modal = document.createElement('div')
    modal.id = 'pwa-install-modal-root'
    document.body.appendChild(modal)

    const root = createRoot(modal)
    root.render(
      <InstallModal
        {...mergedOptions}
        onClose={() => {
          trackEvent('pwa_install_prompt_closed')
          root.unmount()
          document.body.removeChild(modal)
          resolve()
        }}
      />
    )
  })
}

export function InstallModal({ title, steps, icon, onClose }: InstallModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    trackEvent('pwa_install_flow_started', { platform: detectOS() })
  }, [])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      trackEvent('pwa_install_step_completed', { step: currentStep + 1 })
    } else {
      onClose?.()
      trackEvent('pwa_install_flow_completed')
    }
  }

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose || (() => {})}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <img src={icon} alt="App Icon" className="w-20 h-20 mb-6 rounded-xl shadow-md" />
                  
                  <div className="w-full space-y-4">
                    <div key={currentStep} className="flex items-start animate-fade-in">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                        <span className="material-icons text-blue-600 text-xl">{steps[currentStep].icon}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">{steps[currentStep].text}</p>
                        <p className="text-sm text-gray-500 mt-1">Step {currentStep + 1} of {steps.length}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={handleNext}
                  >
                    {currentStep < steps.length - 1 ? (
                      <>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      'Got it!'
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}