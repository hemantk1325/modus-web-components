// eslint-disable-next-line
import { FunctionalComponent, h } from '@stencil/core';

interface IconProps {
  color?: string;
  height?: string;
  onClick?: () => void;
  size?: string;
  width?: string;
}

export const IconDragHandle: FunctionalComponent<IconProps> = (props: IconProps) => (
  <svg
    class="icon-drag-handle"
    height={props.height ?? 16}
    width={props.width ?? 8}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-617.000000, -246.000000)">
        <g transform="translate(100.000000, 100.000000)">
          <g transform="translate(510.000000, 142.000000)">
            <g>
              <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
              <path
                d="M11,18 C11,19.1 10.1,20 9,20 C7.9,20 7,19.1 7,18 C7,16.9 7.9,16 9,16 C10.1,16 11,16.9 11,18 Z M9,10 C7.9,10 7,10.9 7,12 C7,13.1 7.9,14 9,14 C10.1,14 11,13.1 11,12 C11,10.9 10.1,10 9,10 Z M9,4 C7.9,4 7,4.9 7,6 C7,7.1 7.9,8 9,8 C10.1,8 11,7.1 11,6 C11,4.9 10.1,4 9,4 Z M15,8 C16.1,8 17,7.1 17,6 C17,4.9 16.1,4 15,4 C13.9,4 13,4.9 13,6 C13,7.1 13.9,8 15,8 Z M15,10 C13.9,10 13,10.9 13,12 C13,13.1 13.9,14 15,14 C16.1,14 17,13.1 17,12 C17,10.9 16.1,10 15,10 Z M15,16 C13.9,16 13,16.9 13,18 C13,19.1 13.9,20 15,20 C16.1,20 17,19.1 17,18 C17,16.9 16.1,16 15,16 Z"
                id="🔹-Icon-Color"
                fill={props.color ?? '#6A6976'}></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
