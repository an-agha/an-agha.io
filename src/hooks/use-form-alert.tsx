"use client"

import { useState } from "react"

export type AlertType = "success" | "error" | "info"

export interface AlertState {
    isOpen: boolean
    type: AlertType
    title: string
    message: string
}

export function useFormAlert() {
    const [alertState, setAlertState] = useState<AlertState>({
        isOpen: false,
        type: "success",
        title: "",
        message: "",
    })

    const showSuccess = (title: string, message: string) => {
        setAlertState({
            isOpen: true,
            type: "success",
            title,
            message,
        })
    }

    const showError = (title: string, message: string) => {
        setAlertState({
            isOpen: true,
            type: "error",
            title,
            message,
        })
    }

    const showInfo = (title: string, message: string) => {
        setAlertState({
            isOpen: true,
            type: "info",
            title,
            message,
        })
    }

    const closeAlert = () => {
        setAlertState((prev) => ({ ...prev, isOpen: false }))
    }

    return {
        alertState,
        showSuccess,
        showError,
        showInfo,
        closeAlert,
    }
}
