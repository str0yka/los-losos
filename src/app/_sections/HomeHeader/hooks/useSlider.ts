import { useEffect, useRef } from 'react';

export const useSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      let isDraggable = false;
      let dragStartPosition = 0;
      let dragEndPosition = 0;
      const percentOfScrollWidth = slider.scrollWidth / window.innerWidth;

      const onDragStart = (event: globalThis.MouseEvent) => {
        isDraggable = true;
        dragStartPosition = event.clientX * percentOfScrollWidth;
      };

      const onDragEnd = () => {
        isDraggable = false;
        dragEndPosition = slider.scrollLeft;
      };

      const onDrag = (event: globalThis.MouseEvent) => {
        if (!isDraggable) return;

        slider.scrollLeft = dragEndPosition
          + dragStartPosition
          - event.clientX * percentOfScrollWidth;
      };

      slider.addEventListener('mousedown', onDragStart);
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('mousemove', onDrag);

      return () => {
        slider.removeEventListener('mousedown', onDragStart);
        window.removeEventListener('mouseup', onDragEnd);
        window.removeEventListener('mousemove', onDrag);
      };
    }
  }, []);

  return sliderRef;
};
