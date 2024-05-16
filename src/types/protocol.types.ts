export interface Protocol {
	name: string;
	port: string;
	osi: string;
	connectionType: string[];
	speed: number;
	security: string;
	payload: string[];
	headers: string[];
	standards: string[];
	description: string;
	latestVersion: Float64Array;
}