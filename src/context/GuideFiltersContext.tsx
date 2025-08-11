import { createContext, useContext, useMemo, useState } from "react";

export interface GuideFiltersState {
    search: string;
}

export interface GuideFiltersActions {
    setSearch: (v: string) => void;
    clear: () => void;
}

const defaultState: GuideFiltersState = { search: "" };

const GuideFiltersContext = createContext<{
    state: GuideFiltersState;
    actions: GuideFiltersActions;
}>({ state: defaultState, actions: { setSearch: () => {}, clear: () => {} } });

export function GuideFiltersProvider({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState<string>("");

    const actions: GuideFiltersActions = useMemo(
        () => ({
            setSearch,
            clear: () => setSearch(""),
        }),
        []
    );

    const value = useMemo(() => ({ state: { search }, actions }), [search, actions]);
    return <GuideFiltersContext.Provider value={value}>{children}</GuideFiltersContext.Provider>;
}

export function useGuideFilters() {
    return useContext(GuideFiltersContext);
}
