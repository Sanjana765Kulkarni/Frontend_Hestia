import React from "react";

export default function Chat() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#000000] text-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#393428] px-10 py-3">
          <div className="flex items-center gap-4">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"/></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em]">Hestia</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium leading-normal cursor-pointer">Home</a>
              <a className="text-sm font-medium leading-normal cursor-pointer">About</a>
              <a className="text-sm font-medium leading-normal cursor-pointer">Contact</a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#393428] text-white gap-2 text-sm font-bold px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
              </svg>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCh3dpO5nWL5uRTaUte70T1h0M272TnFUBVKV_UfPw-OlKpnNuL8HbbY44piB5nJkYAKT5JPwSVjf-OpCGMiPw2Jyh5_E0FMwQAnYTliFPIM5Aruypr2ikZN73Aiu3e3V3faoZ091ci1hsXHSt2dIRBMxxkYDqUO--kYer25A_QOgfHlogE6TcK1lfyDBgr455fv9VZobOcO1E6IU2QJLzdTjDwLhjzuCEJr7CvLoW7YLlH-qG8bA-EgqbdJItU2nYXbeK3pAR-vGl")` }}
            ></div>
          </div>
        </header>

        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome to your therapy session</h2>
            <p className="text-base font-normal pb-3 pt-1 px-4 text-center">Your privacy is our priority. All conversations are encrypted and confidential.</p>

            <div className="flex items-end gap-3 p-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")` }}>
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-[#bab19c] text-[13px] font-normal max-w-[360px]">Hestia</p>
                <p className="text-base font-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#393428]">Hello, I'm Hestia. How are you feeling today?</p>
              </div>
            </div>

            <div className="flex items-end gap-3 p-4 justify-end">
              <div className="flex flex-1 flex-col gap-1 items-end">
                <p className="text-[#bab19c] text-[13px] font-normal max-w-[360px] text-right">User</p>
                <p className="text-base font-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#f3c144] text-[#000000]">I'm feeling a bit anxious about work.</p>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOKRWYlOsQahCEUJ-tHnAu2ynNYp2aFQPGmZVZnsdma4BjpGbSTElcTP-SWWVse5dD8ytyeV2RYNckRI0dyiKPojNhQSTdrB4CqnQkWEpm4O18B5Wh--rDBOhRVW76CCrDjjjsxB0-lXdoOh4wYryu_TdET_KQh0d3YpUDz1QFq6qBJf7Q7pN7ruLT7nHZzP4uoSxU8eoBlK_aSDhnCbLkxoKRT0Ifqhn0n2fDxAbrknG6yUFpoKUOJY404qa3KH5PFSGKvnvL-C03")` }} >
              </div>
            </div>

            <div className="flex items-end gap-3 p-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBax6WL7CpZ9MsSMlRD2EtvB0iP1Jm1G116jQsFhu7p0FFLICT9ZQVvFOFkXr7HXhUMfkkEryD10pOo90cJYsye9XOB6ZLATdbzXxCEc07eHFVBZiEhkmXiii0SJd8WOOQc0pzvbW27cpOd1ZGefExQ4mtjpFMJtzwgWOXU0TWoxkq0PM4GE0Me-wpmMdhu15W8qHqtXAmLEiZalBbLoonI5MZVzc_eP_zamzRoSZvwIsZ7lYDc8dOBji9Iiavo6CsuDCnhOjYacQm8")` }}>
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start">
                <p className="text-[#bab19c] text-[13px] font-normal max-w-[360px]">Hestia</p>
                <p className="text-base font-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#393428]">
                  I understand. Can you tell me more about what's making you anxious?
                </p>
              </div>
            </div>

            <div className="flex items-center px-4 py-3 gap-3">
              <label className="flex flex-col min-w-40 h-12 flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <input
                    placeholder="Type your message..."
                    className="form-input w-full flex-1 rounded-xl text-white bg-[#393428] px-4 text-base placeholder:text-[#bab19c] focus:outline-none"
                  />
                  <div className="flex bg-[#393428] items-center justify-center pr-4 rounded-r-xl">
                    <button className="flex items-center justify-center p-1.5 text-[#bab19c]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </label>
            </div>

            <div className="flex justify-center flex-wrap gap-3 px-4 py-3 max-w-[480px] mx-auto">
              <button className="flex grow cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#393428] text-white text-sm font-bold">
                Give Feedback
              </button>
              <button className="flex grow cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#393428] text-white text-sm font-bold">
                End Session
              </button>
            </div>

            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f3c144] text-[#000000] text-sm font-bold">
                New Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
