"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import type { AlertState } from "@/hooks/use-form-alert"
import { Icon } from "@iconify/react"
import { DialogTitle } from "@radix-ui/react-dialog"

interface FormAlertDialogProps {
    alertState: AlertState
    onClose: () => void
}

export function FormAlertDialog({ alertState, onClose }: FormAlertDialogProps) {
    const getIcon = () => {
        switch (alertState.type) {
            case "success":
                return <Icon icon="line-md:circle-filled-to-confirm-circle-filled-transition" className="h-30 w-30 text-green-500" />
            case "error":
                return <Icon icon="line-md:close-circle-filled" className="h-30 w-30 text-red-600" />

            case "info":
                return <Icon icon="line-md:alert-circle-loop" className="h-30 w-30 text-blue-600" />
            default:
                return <Icon icon="line-md:alert-loop" className="h-30 w-30 text-amber-600" />
        }
    }


    return (
        <Dialog open={alertState.isOpen} >
            <DialogContent className="sm:max-w-md !rounded-4xl" showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className="font-bold">{""}</DialogTitle>
                </DialogHeader>
                <div className="mx-auto">
                    {getIcon()}
                </div>
                <h2 className="text-center text-2xl font-bold">{alertState.title}</h2>
                <p className="text-center">
                    {alertState.message}
                </p>
                <DialogFooter className="mt-4">
                    <Button onClick={onClose} className="w-full">
                        OK
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
