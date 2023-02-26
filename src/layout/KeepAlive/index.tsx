import './index.less';

import {
  FC,
  memo,
  Fragment,
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type RefObject,
} from 'react';
import { createPortal } from 'react-dom';

type IProps = {
  name: string;
  children?: ReactNode | ReactNode[];
};

interface IReactNodes {
  name: string;
  element?: ReactNode;
}

const KeepAlive: FC<IProps> = ({ children, name }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reactNodes, setReactNodes] = useState<IReactNodes[]>([]);

  useEffect(() => {
    if (!name) {
      return;
    }
    const reactNode = reactNodes.find((v) => v.name === name);
    if (reactNode === undefined) {
      setReactNodes([
        ...reactNodes,
        {
          name,
          element: children,
        },
      ]);
      return;
    }
  }, [name, children]);

  return (
    <Fragment>
      <div ref={containerRef} className='keep-alive' />
      {reactNodes.map((v) => (
        <Portal renderWrap={containerRef} actived={name === v.name} name={v.name} key={v.name}>
          {v.element}
        </Portal>
      ))}
    </Fragment>
  );
};

const Portal: FC<{
  children: ReactNode | ReactNode[];
  renderWrap: RefObject<HTMLDivElement>;
  actived: boolean; // 是否激活
  name: string;
}> = ({ children, renderWrap, actived, name }) => {
  const [targetElement] = useState(() => document.createElement('div'));
  const activatedRef = useRef(false);
  activatedRef.current = activatedRef.current || actived;
  useEffect(() => {
    if (actived) {
      renderWrap.current?.appendChild(targetElement);
    } else {
      try {
        renderWrap.current?.removeChild(targetElement);
      } catch (e) {}
    }
  }, [targetElement, name, renderWrap, actived]);
  useEffect(() => {
    targetElement.setAttribute('id', name);
  }, [name, targetElement]);
  return <Fragment>{activatedRef.current && createPortal(children, targetElement)}</Fragment>;
};

export default memo(KeepAlive);
