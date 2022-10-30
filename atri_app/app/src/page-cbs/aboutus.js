import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex4Cb() {
	const onClick = useCallback(callbackFactory("Flex4", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox4Cb() {
	const onClick = useCallback(callbackFactory("TextBox4", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox5Cb() {
	const onClick = useCallback(callbackFactory("TextBox5", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.google.co.in/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink4Cb() {

	return {  }
}
export function useLink5Cb() {

	return {  }
}
export function useLink6Cb() {

	return {  }
}
export function useFlex6Cb() {
	const onClick = useCallback(callbackFactory("Flex6", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox10Cb() {
	const onClick = useCallback(callbackFactory("TextBox10", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex7Cb() {
	const onClick = useCallback(callbackFactory("Flex7", "aboutus", "/aboutus", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}