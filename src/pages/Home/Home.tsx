import * as Modal from "@radix-ui/react-dialog";

import "./Home.css";

const users = [
  { name: "Jason Cavanauagh", joined: "12/02/2022" },
  { name: "Amoni Hawkins", joined: "11/18/2022" },
  { name: "Darwin Ma", joined: "10/27/2022" },
  { name: "Richard Bui", joined: "08/06/2022" },
  // { name: "Nathan Robinson", joined: "04/06/2022" },
  { name: "Peter Parker", joined: "01/16/2022" },
  // { name: "Peter Parker", joined: "01/16/2022" },
];
const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-lime-500",
  "bg-pink-500",
  "bg-purple-500",
];
const getRandomColor = () => {
  const idx = Math.floor(Math.random() * colors.length);
  // console.log(idx);
  return colors[idx];
};
export function Home() {
  const getCard = (idx: number, name: string, date: string) => {
    return (
      <div
        key={idx}
        className="border flex p-4 gap-4 rounded border-slate-300 bg-slate-100 hover:cursor-pointer"
      >
        <div
          className={`rounded-full ${getRandomColor()} flex items-center justify-center text-xl text-white w-12 h-12 border font-bold`}
        >
          {name[0]}
        </div>
        <div className="grow">
          <h3 className="text-xl font-semibold text-slate-900 ">{name}</h3>
          <p className="italic text-slate-500 text-sm">Joined on {date}</p>
        </div>
        <div className="">
          <button
            type="button"
            className="border flex items-center justify-center w-8 h-8 rounded-full bg-red-500  text-sm text-white hover:brightness-110"
          >
            <Modal.Root>
              <Modal.Trigger asChild>
                <i className="material-icons text-base">clear</i>
              </Modal.Trigger>
              <Modal.Portal>
                <Modal.Overlay className="modal-overlay bg-slate-200" />
                <Modal.Content className="border-t-8 border-t-red-500 p-6 w-[380px] modal-content flex flex-col drop-shadow-lg">
                  <Modal.Title className="m-0 flex justify-center text-xl font-bold text-slate-900">
                    Remove User
                  </Modal.Title>
                  <Modal.Description className="">
                    Are you sure you wish to remove this user from the kitchen?
                  </Modal.Description>
                  <div className="mt-5 flex gap-4 justify-center">
                    <Modal.Close asChild>
                      <button className="outline-none rounded-full text-slate-700 hover:brightness-90 bg-slate-200 px-4 py-1 text-base font-medium border-slate-400">
                        Cancel
                      </button>
                    </Modal.Close>
                    <Modal.Close asChild>
                      <button className="outline-none rounded-full bg-red-500 hover:brightness-110 text-white py-2 text-base px-4 border-slate-400">
                        Confirm
                      </button>
                    </Modal.Close>
                  </div>
                </Modal.Content>
              </Modal.Portal>
            </Modal.Root>
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <h1 className="text-teal-600 text-3xl font-bold h-16 flex justify-center items-center">
        Home
      </h1>
      <div className="px-4 grow flex flex-col">
        <h2 className="rounded px-4 text-2xl font-semibold text-slate-800">
          Users
        </h2>
        <div className="h-4" />
        <div className="overflow-hidden max-h-fit p-2 flex-col gap-4 flex">
          {users.map((user, i) => {
            return getCard(i, user.name, user.joined);
          })}
        </div>
      </div>
    </>
  );
}
