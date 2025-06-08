import React, { useEffect, useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { LocationDisplay } from './components/LocationDisplay';
import { MedicalTest } from './utils/types';
import { mockMedicalTests } from './utils/mockData';
export function App() {
  const [searchResults, setSearchResults] = useState<MedicalTest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.error) {
          setLocationError('Unable to detect location');
          setIsLoadingLocation(false);
          return;
        }
        const locationString = data.city && data.region ? `${data.city}, ${data.region}` : data.country_name;
        setLocation(locationString);
      } catch (error) {
        setLocationError('Unable to detect location');
      } finally {
        setIsLoadingLocation(false);
      }
    };
    getLocation();
  }, []);
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    // Simulate API call with setTimeout
    await new Promise(resolve => setTimeout(resolve, 700));
    const results = mockMedicalTests.filter(test => test.name.toLowerCase().includes(query.toLowerCase()) || test.category.toLowerCase().includes(query.toLowerCase()) || test.description.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
    setIsLoading(false);
  };
  const handleUpdateLocation = (newLocation: string) => {
    setLocation(newLocation);
  };
  return <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 md:p-8">
      <LocationDisplay location={location} isLoading={isLoadingLocation} error={locationError} onUpdateLocation={handleUpdateLocation} />
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">
            Medical Test Search
          </h1>
          <p className="text-gray-600">
            Find lab tests, imaging procedures, and other medical examinations
          </p>
        </header>
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        <SearchResults results={searchResults} isLoading={isLoading} searchQuery={searchQuery} />
      </div>
    </main>;
}