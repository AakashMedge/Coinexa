import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image bg-dark-400 animate-pulse" />
        <div className="info">
          <div className="header-line-sm bg-dark-400 rounded animate-pulse" />
          <div className="header-line-lg bg-dark-400 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function TrendingCoinsFallback() {
  return (
    <div id="trending-coins-fallback">
      <h4 className="bg-dark-400 rounded w-32 h-6 mb-4 animate-pulse" />
      <div className="trending-coins-table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="name-cell">Name</TableHead>
              <TableHead className="name-cell">24h Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="name-link">
                    <div className="name-image bg-dark-400 animate-pulse" />
                    <div className="bg-dark-400 rounded w-20 h-4 animate-pulse" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="bg-dark-400 rounded w-16 h-4 animate-pulse" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
