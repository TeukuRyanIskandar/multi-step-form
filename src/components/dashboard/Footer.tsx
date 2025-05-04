// Footer.tsx
"use client"

import Link from "next/link"
import { Button } from "../ui/button"

function FooterOne({ onNext }: { onNext: () => void }) {
  return (
    <>
      <Button variant="secondary" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="default" onClick={onNext}>Next</Button>
    </>
  )
}

function FooterTwo({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <>
      <Button variant="secondary" onClick={onBack}>Back</Button>
      <Button variant="default" onClick={onNext}>Next</Button>
    </>
  )
}

function FooterThree({ onBack }: { onBack: () => void }) {
  return (
    <>
      <Button variant="secondary" onClick={onBack}>Back</Button>
      <Button variant="default" type="submit">Pay now</Button>
    </>
  )
}

export {
  FooterOne,
  FooterTwo,
  FooterThree
}
