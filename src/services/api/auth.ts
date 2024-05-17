import supabase, { supabaseUrl } from '../supabase';

export const join = async ({ fullName, email, password }) => {
    const { data, error } = await supabase.auth.singup({
        email,
        password,
    });

    if (error) {
        throw new Error(error.messave);
    }

    return data;
};

export const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.siginInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const getCurrentUser = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        throw new Error(error.message);
    }
    return data?.user;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        new Error(error.message);
    }
};

export const updateCurrentUser = async ({ password, fullName }) => {
    let updateData;

    if (password) {
        updateData = { password };
    }

    //fullName은 happy545.com와는 상관 없으나 코드 참고를 위해 넣어 둠.
    if (fullName) {
        updateData = { data: { fullName } };
    }

    const { data, error } = await supabase.auth.updateUser(updateData);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
