import {
  FaEdit,
  FaTrash,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRegClock,
  FaHashtag,
} from "react-icons/fa";
function DraftList({ drafts, deleteDraft, editDraft }) {
  const getPlatform = (platform) => {
    switch (platform) {
      case "twitter":
        return {
          icon: <FaTwitter color="#1DA1F2" />,
          name: "Twitter / X",
          color: "#1DA1F2",
        };

      case "linkedin":
        return {
          icon: <FaLinkedin color="#0A66C2" />,
          name: "LinkedIn",
          color: "#0A66C2",
        };

      case "instagram":
        return {
          icon: <FaInstagram color="#E4405F" />,
          name: "Instagram",
          color: "#E4405F",
        };

      default:
        return {
          icon: null,
          name: platform,
          color: "#6366F1",
        };
    }
  };

  return (
    <div className="draft-section">
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "30px",
          marginBottom: "25px",
        }}
      >
        📂 Saved Drafts
      </h2>

      {drafts.length === 0 ? (
        <div className="empty-state">
          <div
            style={{
              fontSize: "65px",
              marginBottom: "18px",
            }}
          >
            ✨
          </div>

          <h3
            style={{
              marginBottom: "10px",
              fontSize: "24px",
            }}
          >
            Nothing here yet
          </h3>

          <p
            style={{
              maxWidth: "400px",
              margin: "auto",
              lineHeight: "1.7",
            }}
          >
            Start writing your first social media post and save it as a draft.
            Your drafts will appear beautifully here.
          </p>
        </div>
      ) : (
        drafts.map((draft, index) => {
          const platform = getPlatform(draft.platform);

          return (
            <div className="draft-card" key={index}>
              <div className="draft-header">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${platform.color}20`,
                      fontSize: "20px",
                    }}
                  >
                    {platform.icon}
                  </div>

                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "17px",
                      }}
                    >
                      {platform.name}
                    </div>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#94A3B8",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "4px",
                      }}
                    >
                      <FaRegClock />
                      Saved Draft
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: `${platform.color}15`,
                    color: platform.color,
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  <FaHashtag
                    style={{
                      marginRight: "6px",
                    }}
                  />
                  {draft.content.length} chars
                </div>
              </div>

              <div className="draft-content">
                {draft.content}
              </div>

              <div className="draft-buttons">
                <button
                  className="edit-btn"
                  onClick={() => editDraft(index)}
                >
                  <FaEdit
                    style={{
                      marginRight: "8px",
                    }}
                  />
                  Edit Draft
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteDraft(index)}
                >
                  <FaTrash
                    style={{
                      marginRight: "8px",
                    }}
                  />
                  Delete Draft
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DraftList;
