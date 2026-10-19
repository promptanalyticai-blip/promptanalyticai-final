"use client";

export class VersionEngine {
  private versions: any[] = [];

  addVersion(analysis: any) {
    this.versions.push({
      id: crypto.randomUUID(),
      timestamp: new Date().toLocaleString(),
      analysis,
    });
  }

  getVersions() {
    return this.versions;
  }

  getLatest() {
    return this.versions[this.versions.length - 1];
  }

  getPrevious() {
    return this.versions[this.versions.length - 2];
  }
}
