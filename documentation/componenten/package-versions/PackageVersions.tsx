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
    packages.forEach(async (pkg) => {
      try {
        const response = await fetch(`https://registry.npmjs.org/${pkg}`);
        const data = (await response.json()) as NpmRegistryResponse;
        const latestVersion = data['dist-tags'].latest;

        setVersions((prev) => ({ ...prev, [pkg]: latestVersion }));
        setDescriptions((prev) => ({
          ...prev,
          [pkg]: data.versions[latestVersion]?.description || 'No description available',
        }));
        setPublishDates((prev) => ({
          ...prev,
          [pkg]: data.time?.[latestVersion]
            ? new Date(data.time[latestVersion]).toLocaleDateString('nl-NL')
            : 'No date available',
        }));
      } catch (error) {
        console.error(`Failed to fetch version for ${pkg}:`, error);
        setVersions((prev) => ({ ...prev, [pkg]: 'N/A' }));
        setDescriptions((prev) => ({ ...prev, [pkg]: 'N/A' }));
        setPublishDates((prev) => ({ ...prev, [pkg]: 'N/A' }));
      }
    });
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
