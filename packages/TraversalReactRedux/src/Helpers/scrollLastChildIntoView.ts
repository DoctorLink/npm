export default (containerRef: any) => {
  const children =
    containerRef && containerRef.current && containerRef.current.children;
  if (children) {
    const lastChild = children.length > 0 && children[children.length - 1];
    if (lastChild) lastChild.scrollIntoView({ behavior: 'smooth' });
  }
};
