import Modal from './Modal';
import Trigger from './Trigger';
import Content from './Content';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import CloseButton from './CloseButton';

const CompoundModal = Object.assign(Modal, {
  Trigger,
  Content,
  Header,
  Body,
  Footer,
  CloseButton,
});

export default CompoundModal;
