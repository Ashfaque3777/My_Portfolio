export default function ProgressBar(props) {
  return (
    <>
      <div className="flex w-[90%] h-5 overflow-hidden font-sans text-xs font-medium rounded-full flex-start  border-2 border-solid border-yellow-500">
        <div
          id="progress"
          className="flex items-center justify-center w-[85%] h-full overflow-hidden text-white break-all bg-yellow-500 rounded-full"
        >
          {props.width}
        </div>
      </div>
    </>
  );
}
