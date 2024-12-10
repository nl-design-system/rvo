import { Table } from '@nl-rvo/components';
import React, { useEffect, useState } from 'react';

interface NpmRegistryResponse {
  'dist-tags': {
    latest: string;
  };
  versions: {
    [version: string]: {
      version: string;
      description?: string;
      time?: string;
    };
  };
  time?: {
    [version: string]: string;
  };
}

const PackageVersions: React.FC = ({ packages }: { packages: string[] }) => {
  const [versions, setVersions] = useState<{ [key: string]: string }>({});
  const [descriptions, setDescriptions] = useState<{ [key: string]: string }>({});
  const [publishDates, setPublishDates] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchVersions = async () => {
      const versionData: { [key: string]: string } = {};
      const descriptionData: { [key: string]: string } = {};
      const dateData: { [key: string]: string } = {};

      for (const pkg of packages) {
        try {
          const response = await fetch(`https://registry.npmjs.org/${pkg}`);
          const data = (await response.json()) as NpmRegistryResponse;
          const latestVersion = data['dist-tags'].latest;

          versionData[pkg] = latestVersion;
          descriptionData[pkg] = data.versions[latestVersion]?.description || 'No description available';
          dateData[pkg] = data.time?.[latestVersion]
            ? new Date(data.time[latestVersion]).toLocaleDateString('nl-NL')
            : 'No date available';
        } catch (error) {
          console.error(`Failed to fetch version for ${pkg}:`, error);
          versionData[pkg] = 'N/A';
          descriptionData[pkg] = 'N/A';
          dateData[pkg] = 'N/A';
        }
      }
      setVersions(versionData);
      setDescriptions(descriptionData);
      setPublishDates(dateData);
    };

    fetchVersions();
  }, [packages]);

  return (
    <Table
      columns={[
        { label: 'Package' },
        { label: 'Laatste versie' },
        { label: 'Laatste publicatie' },
        { label: 'Beschrijving' },
      ]}
      rows={packages.map((pkg) => [
        pkg,
        versions[pkg] || 'Loading...',
        publishDates[pkg] || 'Loading...',
        descriptions[pkg] || 'Loading...',
      ])}
    />
  );
};

export default PackageVersions;
