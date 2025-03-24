import { NEWS_API_ORG_SOURCES, NEWS_SOURCES } from "@constants/feed.constants";
import userPreference from "@services/userPreference.service";
import Checkbox from "@ui/Checkbox";
import { useEffect, useState } from "react";

const getNewsSourceLabel = () =>
    Object.values(NEWS_API_ORG_SOURCES)
        .filter((s) => !["nyt", "guardian"].includes(s.id))
        .map((s) => s.name)
        .join(", ");

const SourcesGroup = () => {
    // Load stored sources from preferences
    const initialSources = userPreference.get().sources || [];
    const [selectedSources, setSelectedSources] = useState<string[]>(initialSources);

    // Sync changes to preferences
    useEffect(() => {
        userPreference.set({
            sources: selectedSources
        });
    }, [selectedSources]);

    const toggleSelection = (id: string) => {
        setSelectedSources((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    return (
        <fieldset className="rounded-lg border border-gray-300 dark:border-gray-700">
            <legend className="text-textPrimary dark:text-textPrimary-dark">
                Select News Sources
            </legend>
            <div className="mt-2 pl-2 space-y-2">
                {NEWS_SOURCES.map(({ id, name }) => (
                    <div key={id} className="space-y-1">
                        <Checkbox
                            checked={selectedSources.includes(id)}
                            onChange={() => toggleSelection(id)}
                            label={name}
                        />
                        {id === "newsapi" && (
                            <div className="text-xs text-gray-500 dark:text-gray-300 pl-4">
                                {getNewsSourceLabel()}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default SourcesGroup;
