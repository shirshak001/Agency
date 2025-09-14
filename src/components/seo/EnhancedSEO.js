'use client';

import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  WebsiteSchema,
  SoftwareApplicationSchema,
  ProfessionalServiceSchema
} from './StructuredData';

const EnhancedSEO = () => {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      <SoftwareApplicationSchema />
      <ProfessionalServiceSchema />
    </>
  );
};

export default EnhancedSEO;