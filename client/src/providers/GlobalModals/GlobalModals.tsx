import { Modals } from 'features/GlobalModals';

const GlobalModals: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => (
  <>
    <Modals />
    {children}
  </>
);

export { GlobalModals };
