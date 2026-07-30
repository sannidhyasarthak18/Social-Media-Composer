import { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSave,
  FaPenFancy,
  FaMagic,
} from "react-icons/fa";

import CharacterCounter from "./CharacterCounter";
import DraftList from "./DraftList";
import strategies from "../strategies/validationStrategy";
import useDraft from "../hooks/useDraft";

function PostComposer() {
  const { drafts, setDrafts } = useDraft();

  const [platform, setPlatform] = useState("twitter");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const limit = strategies[platform].limit;
  const isValid = strategies[platform].validate(content);

  const saveDraft = () => {
    if (!content.trim()) return;

    const draft = {
      platform,
      content,
    };

    if (editingIndex !== null) {
      const updated = [...drafts];
      updated[editingIndex] = draft;
      setDrafts(updated);
      setEditingIndex(null);
    } else {
      setDrafts([...drafts, draft]);
    }

    setContent("");
    setPlatform("twitter");
  };

  const deleteDraft = (index) => {
    const updated = drafts.filter((_, i) => i !== index);
    setDrafts(updated);
  };

  const editDraft = (index) => {
    setPlatform(drafts[index].platform);
    setContent(drafts[index].content);
    setEditingIndex(index);
  };

  const platformIcon = () => {
    switch (platform) {
      case "twitter":
        return <FaTwitter color="#1DA1F2" />;
      case "linkedin":
        return <FaLinkedin color="#0077B5" />;
      case "instagram":
        return <FaInstagram color="#E1306C" />;
      default:
        return null;
    }
  };

  return (
    <div className="composer">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          <FaPenFancy
            style={{
              marginRight: "10px",
              color: "#6366F1",
            }}
          />
          Compose Your Post
        </h2>

        <FaMagic
          size={24}
          color="#8B5CF6"
          style={{
            opacity: 0.8,
          }}
        />
      </div>

      <div className="field">
        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="twitter">🐦 Twitter / X</option>
          <option value="linkedin">💼 LinkedIn</option>
          <option value="instagram">📸 Instagram</option>
        </select>
      </div>

      <div className="field">

        <label>
          {platformIcon()}{" "}
          <span style={{ marginLeft: "8px" }}>
            Compose Post
          </span>
        </label>

        <textarea
          value={content}
          placeholder="✨ Share your thoughts, ideas or achievements..."
          onChange={(e) => setContent(e.target.value)}
        />

      </div>

      <CharacterCounter
        current={content.length}
        limit={limit}
      />

      {!isValid && (
        <p className="error">
          ⚠️ Character limit exceeded for this platform.
        </p>
      )}

      <button
        disabled={!isValid}
        onClick={saveDraft}
      >
        <FaSave
          style={{
            marginRight: "10px",
          }}
        />

        {editingIndex !== null
          ? "Update Draft"
          : "Save Draft"}
      </button>

      <hr />

      <DraftList
        drafts={drafts}
        deleteDraft={deleteDraft}
        editDraft={editDraft}
      />
    </div>
  );
}

export default PostComposer;