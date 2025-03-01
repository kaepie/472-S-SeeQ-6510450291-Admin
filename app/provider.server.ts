interface Shop {
    shopfilter: shopfilter;
}

interface shopfilter {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    is_verified: boolean;
    is_open: boolean;
    description: string;
    latitude: number;
    image_url: string;
    longitude: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

interface statusMessage {
    status: string;
    message: string;
    state: boolean;
}

let Provider: Record<string, Shop> = {};

let Status: Record<string, statusMessage> = {};

function setDefaultStatus(id: number) {
    Status[id.toString()] = {
        status: "none",
        message: "",
        state: false
    };
}

function setDefaultProvider(id: number) {
    Provider[id] = {
        shopfilter: {
            id: id.toString(),
            name: "SeeQ",
            address: "",
            phone: "",
            email: "",
            is_verified: false,
            is_open: false,
            description: "",
            image_url: "",
            latitude: 0,
            longitude: 0,
            created_at: "",
            updated_at: "",
            deleted_at: "",
        }
    };
  }

export default { Provider, Status};
export { setDefaultProvider, setDefaultStatus};