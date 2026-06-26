import "server-only";

/**
 * This content is illustrative and must be replaced before going live.
 * In production, dossier data should be sourced from a secure, authenticated database or service.
 */

export type ReportKind = "scenario" | "memorandum" | "dashboard";

export interface ClientReport {
  id: string;
  title: string;
  kind: ReportKind;
  summary: string;
  updated: string; // ISO 8601
  reference?: string;
  viewer?: string; // Component name or path
}

export interface ClientDossier {
  id: string;
  name: string;
  engagement: string;
  reference: string;
  counsel: string;
  opened: string; // ISO 8601
  reports: ClientReport[];
}

const CLIENTS: Record<string, ClientDossier> = {
  "precious-electrochem": {
    id: "precious-electrochem",
    name: "Precious Electrochem Ltd.",
    engagement:
      "Strategic analysis: Sohar Free Zone expansion and India–Oman CEPA trade impact modelling",
    reference: "PE-2024-06-001",
    counsel: "Tushaar Sharma, Counsel",
    opened: "2024-06-01T00:00:00Z",
    reports: [
      {
        id: "scenario-001",
        title: "Free Zone Duty Exposure Model",
        kind: "scenario",
        summary:
          "Interactive scenario modelling for annual duty exposure under MFN vs. CEPA regimes, with establishment cost payback analysis.",
        updated: "2024-06-15T10:30:00Z",
        reference: "PE-2024-06-001-SC01",
        viewer: "free-zone-scenario",
      },
      {
        id: "memo-001",
        title: "Sohar Zone: Regulatory Landscape & Entry Roadmap",
        kind: "memorandum",
        summary:
          "Comprehensive briefing on Oman free zone regulatory framework, lease structures, and Indian manufacturing incentives.",
        updated: "2024-06-10T14:00:00Z",
        reference: "PE-2024-06-001-MM01",
      },
    ],
  },
};

export function getDossier(clientId: string): ClientDossier | null {
  return CLIENTS[clientId] ?? null;
}

export function getReport(
  clientId: string,
  reportId: string
): ClientReport | null {
  const dossier = getDossier(clientId);
  if (!dossier) return null;
  return dossier.reports.find((r) => r.id === reportId) ?? null;
}

export function listClientIds(): string[] {
  return Object.keys(CLIENTS);
}
