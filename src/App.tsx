import { motion, useMotionValue, useTransform } from "framer-motion";

function App() {
  return (
    <>
      <FoldedMap />
    </>
  );
}

function FoldedMap() {
  const xDrag = useMotionValue(0);
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  return (
    <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
      <div className="aspect-video grid grid-cols-3 [grid-area:1/1] h-full w-full">
        <motion.div style={{ x: xLeftSection }} className="map-image" />
        <div className="map-image" />
        <motion.div style={{ x: xRightSection }} className="map-image" />
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        style={{ x: xDrag }}
        className="[grid-area:1/1] border border-blue-100 relative z-10"
      />
    </div>
  );
}

export default App;
