import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            showToast({ message: "Signed Out!", type: "success" });
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "error" });
        },
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button
            onClick={handleClick}
            className="text-blue-600 btn px-3 font-bold bg-white hover:bg-red-600 hover:text-white border-none leading-6 "
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
