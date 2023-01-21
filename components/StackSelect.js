import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

const stacks = [
  { name: "Frontend Development" },
  { name: "UI & UX Design" },
  { name: "Al & Data Science" },
];

function StackSelect({ selectedStack, setSelectedStack }) {
  // const [selectedStack, setSelectedStack] = useState([]);

  return (
    <Listbox value={selectedStack} onChange={setSelectedStack} multiple>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full rounded-[10px] bg-[#F9F9F9] p-4'>
          {/* {selectedStack.map((stack) => stack.name).join(", ")} */}
          {({ open }) => (
            <>
              Select Stacks
              <Image
                src='/images/cherivon.svg'
                alt=''
                height={"20px"} width={"20px"}
                className={`absolute top-[50%] right-2 -translate-y-[50%] ${
                  open ? "rotate-180" : ""
                }`}
              />
            </>
          )}
        </Listbox.Button>

        <Listbox.Options className='absolute mt-1 w-full overflow-hidden rounded-[10px] bg-[#F9F9F9] shadow-md'>
          {stacks.map((stack, ind) => (
            <Listbox.Option
              key={ind}
              value={stack}
              disabled={stack.unavailable}
              className={({ active, selected }) =>
                `relative cursor-default select-none py-3 px-4 ${
                  active ? "bg-[#EBEEF6]" : "text-gray-900"
                } ${selected ? "bg-[#DEE7F9]" : ""}`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    <input
                      type='checkbox'
                      checked={selected}
                      name='stacks-input'
                      className='mr-4 accent-[#1253A6]'
                      readOnly
                    />
                    {stack.name}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default StackSelect;
