export function getMousePos(e){
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    const target = e.target;

    return {
      x,
      y,
      target,
    };
}

