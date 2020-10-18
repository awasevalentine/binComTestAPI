export interface NewPolingUnitResult {
    pUnitName: string;
    pUnitNumber: string;
    pUnitId: number,
    wardId: number,
    UniqueWardId
    lgaId: number,
    Scores: PartyResult[]
    sourceIpAddress?: string;
}

export interface PartyResult {
    partyId?: number;
    partyName: string;
    partyScore: number
}