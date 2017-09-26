export class BandService {
    static async byId(id: string): Promise<any> {
        const response = await fetch(`/api/bands/${id}`);
        return response.json();
    }

    static async all(): Promise<any> {
        const response = await fetch('/api/bands');
        return response.json();
    }
}