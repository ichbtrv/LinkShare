import React, { useEffect } from "react";

interface Props {
  children?: React.ReactNode;
  customFooter?: React.ReactNode;
  closable?: boolean;
  description?: string;
  hideFooter?: boolean;
  alignFooter?: "right" | "left";
  layout?: "horizontal" | "vertical";
  icon?: React.ReactNode;
  loading?: boolean;
  onCancel?: any;
  cancelText?: string;
  onConfirm?: any;
  confirmText?: string;
  showIcon?: boolean;
  footerBackground?: boolean;
  title?: string;
  visible: boolean;
  size?: "tiny" | "small" | "medium" | "large";
  style?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  className?: string;
  overlayClassName?: string;
  triggerElement?: React.ReactNode;
}

const Modal = ({
  children,
  customFooter = undefined,
  closable,
  description,
  hideFooter = false,
  alignFooter = "left",
  layout = "horizontal",
  loading = false,
  cancelText = "Go Back",
  onConfirm = () => {},
  onCancel = () => {},
  confirmText = "Confirm",
  showIcon = false,
  title,
  footerBackground,
  icon,
  visible = false,
  size = "large",
  style,
  overlayStyle,
  contentStyle,
  className = "",
  overlayClassName,
  triggerElement,
}: Props) => {
  const [open, setOpen] = React.useState(visible ? visible : false);

  useEffect(() => {
    setOpen(visible);
  }, [visible]);
  const footerContent = customFooter ? (
    customFooter
  ) : (
    <section>
      <button onClick={onCancel} disabled={loading}>
        {cancelText}
      </button>
    </section>
  );

  function handleOpenChange(open: boolean) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      onCancel();
    } else {
      // un-controlled component behaviour
      setOpen(open);
    }
  }
  return (
    <section
      hidden={!open}
      className={`fixed top-0 left-0  z-20 h-[100vh] min-w-[100vw] backdrop-blur-sm appear 
     bg-gray-300 bg-opacity-75
    `}
    >
      <div
        className={"flex flex-col justify-center w-[100vw] items-center h-full"}
      >
        {children}
        {footerContent}
      </div>
    </section>
  );
};
export default Modal;
