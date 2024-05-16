import axiosInstance from '../components/AxiosCaller.tsx';
import { Protocol } from '../types/protocol.types';

export default async function GetProtocol(protocolTxt: string) { // need to add string to get the right protocol

  console.log("get protocol");

    try { // wait for the axios call to resolve
        // axiosInstance.get returns AxiosResponse<Protocol> and not Protocol
        const response = await axiosInstance.get<Protocol>(`/protocol/${protocolTxt}`);
        console.log("get protocol axios:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}