import { Input } from '@nextui-org/input'
import React from 'react'

export default function InputField({
    type,
    label,
    value,
    isClearable,
    radius,
    size,
    placeholder,
    onChange,
    onBlur,
    onClear,
    haveStartContent,
    iconJSX,
    variant,
    errorMessage,
    isInvalid,
    inputName,
    onInput,
}) {
    return (
        haveStartContent ? (
            <Input type={type} name={inputName} variant={variant} label={label} isInvalid={isInvalid} errorMessage={errorMessage} onInput={onInput} onBlur={onBlur} isClearable={isClearable} onClear={onClear} radius={radius} size={size} placeholder={placeholder} value={value} onChange={onChange} startContent={
                <div className='text-inherit text-xl flex items-center justify-center'>
                    {iconJSX}
                </div>
            } classNames={{
                label: [
                    "!text-surface-onSurfaceVariant",
                    "tracking-wider",
                    "group-data-[invalid=true]:!text-danger",
                ],
                clearButton: [
                    "text-primary"
                ],
                innerWrapper :[
                    "bg-transparent",
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                ],
                input: [
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                    "placeholder:!text-surface-onSurfaceVariant tracking-wider",
                ],
                inputWrapper: [
                    "bg-surface-surfaceContainer hover:!bg-surface-surfaceContainerHighest",
                    "group-data-[invalid=true]:!bg-surface-surfaceContainer !text-danger",
                    "shadow-none",
                    "focus-within:!bg-surface-surfaceContainer",
                    "!cursor-text",
                ],
                errorMessage: [
                    "text-danger"
                ],
            }}
            autoComplete='off'
            />
        ) : (
            <Input type={type} name={inputName} variant={variant} label={label} isInvalid={isInvalid} errorMessage={errorMessage} onInput={onInput} onBlur={onBlur} isClearable={isClearable} onClear={onClear} radius={radius} size={size} placeholder={placeholder} value={value} onChange={onChange} classNames={{
                label: [
                    "!text-surface-onSurfaceVariant",
                    "tracking-wider",
                    "group-data-[invalid=true]:!text-danger",
                ],
                clearButton: [
                    "text-primary"
                ],
                innerWrapper :[
                    "bg-transparent",
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                ],
                input: [
                    "!text-surface-foreground",
                    "group-data-[invalid=true]:!text-danger",
                    "placeholder:!text-surface-onSurfaceVariant tracking-wider",
                ],
                inputWrapper: [
                    "bg-surface-surfaceContainer hover:!bg-surface-surfaceContainerHighest",
                    "group-data-[invalid=true]:!bg-surface-surfaceContainer !text-danger",
                    "shadow-none",
                    "focus-within:!bg-surface-surfaceContainer",
                    "!cursor-text",
                ],
                errorMessage: [
                    "text-danger"
                ],
            }}
            autoComplete='off'
            />
        )
    )
}
