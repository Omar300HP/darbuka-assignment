import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/index';

import { selectOpenedModal, clearModal } from '../slices';
import { GlobalModals } from 'types/enums';
import { NewBoardModal } from 'features/CreateNewBoard';

const Modals = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const modalsComponents = useRef({
    '': null,
    [GlobalModals.NEW_BOARD]: NewBoardModal
  });
  const modalOpened = useAppSelector(selectOpenedModal);
  const CurrentOpenedModal = modalsComponents.current[modalOpened];

  useEffect(() => {
    dispatch(clearModal());
  }, [dispatch, pathname]);

  return CurrentOpenedModal ? <CurrentOpenedModal /> : null;
};

export default Modals;
