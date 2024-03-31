import { Modal } from 'antd';
import { ReactNode } from 'react';

interface ModalCommonProps {
  title?: string;
  children: ReactNode;
  width?: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  [key: string]: any;
}

function ModalCommon({
  title,
  children,
  width = '500px',
  open,
  onOk,
  onCancel,
  ...props
}: ModalCommonProps) {
  return (
    <Modal
      closable={false}
      width={width}
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={[]}
      {...props}
    >
      {children}
    </Modal>
  );
}

export default ModalCommon;
