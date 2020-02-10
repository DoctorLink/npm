import posed from 'react-pose';

export default posed.div({
  enter: {
    transition: { duration: 0 },
  },
  exit: {
    transition: { duration: 0 },
    delay: 300,
  },
});
