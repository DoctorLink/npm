import React from 'react';
import { motion } from 'framer-motion';

// export const DelayExit: React.FC<{ children: any, isMounted: boolean, delayTime: number }> = ({ children, isMounted, delayTime = 600 }) => {
//   const [shouldRender, setShouldRender] = useState<boolean>(isMounted);
//   const prevIsMounted = usePrevious<boolean>(isMounted);

//   useEffect(() => {
//     if (prevIsMounted && !isMounted) {
//       setTimeout(() => setShouldRender(false), delayTime);
//     } else if (!prevIsMounted && isMounted) {
//       setShouldRender(true);
//     }
//   }, [prevIsMounted, isMounted, setShouldRender])

//   return shouldRender ? (<>{children}</>) : null;
// }

const DelayExit: React.FC<{ delay?: number }> = ({ children, delay = 0.3 }) => {
  return (
    <motion.div
      variants={{
        enter: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0, delay: delay } },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default DelayExit;
