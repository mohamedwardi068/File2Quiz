import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Path() {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    return (
      <motion.div 
        className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-6 w-full h-auto flex justify-center mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex text-gray-500 text-sm relative bg-white p-4 rounded-full w-[95%] h-[80px] mt-1 shadow-md">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="hover:text-gray-300 font-bold ml-7 text-lg">Home</Link>
          </motion.div>
          <span className="mx-3 mt-1">/</span>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/pages" className="hover:text-gray-300 font-bold text-lg">Pages</Link>
          </motion.div>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <React.Fragment key={to}>
                <span className="mx-3 mt-1">/</span>
                {isLast ? (
                  <motion.span 
                    className="font-bold text-black text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value}
                  </motion.span>
                ) : (
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link to={to} className="hover:text-gray-300 font-bold text-lg">{value}</Link>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </motion.div>
    );
  };

  return generateBreadcrumbs();
}

export default Path;