import React from 'react'

interface CalendaryTimeSlotsProps {
  disabled: boolean
  selectedTimes: string[]
  setSelectedTimes: React.Dispatch<React.SetStateAction<string[]>>
}

const CalendaryTimeSlots = ({
  disabled,
  selectedTimes,
  setSelectedTimes,
}: CalendaryTimeSlotsProps) => {
  const times = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ]

  const handleTimeSelect = (time: string) => {
    if (selectedTimes.includes(time)) {
      return setSelectedTimes(
        selectedTimes.filter((selectedTime) => selectedTime !== time),
      )
    }

    setSelectedTimes([...selectedTimes, time])
  }

  return (
    <div className="flex justify-center flex-col gap-3 p-3 w-full shadow rounded">
      <h2 className="font-ruluko text-lg uppercase">Selecione os horários:</h2>
      <ul className="grid grid-cols-4 gap-3">
        {times.map((time, index) => (
          <li key={index} className="flex items-center justify-center">
            <button
              className={`border border-gray-300 p-2 rounded ${
                selectedTimes.includes(time)
                  ? 'bg-background-rose text-white disabled:bg-zinc-400 disabled:animate-pulse'
                  : ''
              }`}
              onClick={() => handleTimeSelect(time)}
              disabled={disabled}
            >
              {time}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CalendaryTimeSlots
