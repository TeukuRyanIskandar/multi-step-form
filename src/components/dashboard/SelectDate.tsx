"use client";

import { format } from "date-fns";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function SelectDate() {
  const [date, setDate] = useState(new Date());

  function handleDateSelect(selectedDate: Date | undefined) {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  function handleTimeChange(type: string, value: string) {
    const newDate = new Date(date);

    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === "ampm") {
      const hours = newDate.getHours();
      if (value === "AM" && hours >= 12) {
        newDate.setHours(hours - 12);
      } else if (value === "PM" && hours < 12) {
        newDate.setHours(hours + 12);
      }
    }

    setDate(newDate);
  }

  return (
    <>
      {/* displays date and time*/}
      <div className="border rounded-md p-4 mb-4">
        <div className="text-lg font-medium mb-4">
          {date ? format(date, "MM/dd/yyyy hh:mm aa") : "No date selected"}
        </div>

        <div className="space-y-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="mx-auto"
          />

          {/* hours */}
          <div className="flex flex-col sm:flex-row gap-4 border-t pt-4">
            <div className="flex-1">
              <p className="text-sm mb-2 font-medium text-center">Hours</p>
              <ScrollArea className="h-[200px]">
                <div className="grid grid-cols-1 gap-2 p-2">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                    <Button
                      key={hour}
                      size="sm"
                      variant={
                        date && date.getHours() % 12 === hour % 12
                          ? "default"
                          : "outline"
                      }
                      className="w-full"
                      onClick={() => handleTimeChange("hour", hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>

            <div className="flex-1">
              <p className="text-sm mb-2 font-medium  text-center">Minutes</p>
              <ScrollArea className="h-[200px]">
                <div className="grid grid-cols-1 gap-2 p-2">
                  {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                    <Button
                      key={minute}
                      size="sm"
                      variant={
                        date && date.getMinutes() === minute
                          ? "default"
                          : "outline"
                      }
                      className="w-full"
                      onClick={() => handleTimeChange("minute", minute.toString())}
                    >
                      {minute.toString().padStart(2, "0")}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>

            <div className="flex-1">
              <p className="text-sm mb-2 font-medium text-center">AM/PM</p>
              <div className="grid grid-cols-1 gap-2 p-2">
                {["AM", "PM"].map((ampm) => (
                  <Button
                    key={ampm}
                    size="sm"
                    variant={
                      date &&
                        ((ampm === "AM" && date.getHours() < 12) ||
                          (ampm === "PM" && date.getHours() >= 12))
                        ? "default"
                        : "outline"
                    }
                    className="w-full"
                    onClick={() => handleTimeChange("ampm", ampm)}
                  >
                    {ampm}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}