import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";
const ContentAll = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default ContentAll;
