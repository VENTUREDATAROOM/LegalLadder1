import Draggable from 'react-draggable';

const TextPage = () => {

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div
        className={`handle  `}
       
      >
        <input
          type="text"
          placeholder="Enter text"
        />
        
      </div>
    </Draggable>
  );
};

export default TextPage;