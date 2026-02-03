import {AnimatePresences, Steps} from "./Animations/AnimatePresence";
import CollabsableList from "./Animations/CollabsableList";
import DragAndDrop from "./Animations/DragAndDrop";
import Fade from "./Animations/Fade";
import Hovering from "./Animations/Hovering";
import PositionChange from "./Animations/PositionChange";
import StaggeringChildren from "./Animations/StaggeringChildren";

export default function App() {
  return (
    <div className="bg-[#9F8383] w-200 h-fit p-4 flex flex-col gap-y-8 justify-center items-center rounded-4xl">
      <Fade />
      <PositionChange />
      <Hovering />
      <StaggeringChildren />
      <DragAndDrop />
      <AnimatePresences />
      <Steps />
      <CollabsableList />
    </div>
  );
}
