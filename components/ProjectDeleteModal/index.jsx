import styled from "styled-components";

export default function ProjectDeleteModal({
  title,
  onConfirm,
  onCancel,
  error,
}) {
  return (
    <StyledOverlay onClick={onCancel}>
      <StyledModal>
        <h2>Delete {title}?</h2>
        {error && <p>{error}</p>}
        <StyledButtonRow>
          <StyledCancelButton onClick={onCancel}>Cancel</StyledCancelButton>
          <StyledDeleteButton onClick={onConfirm}>Delete</StyledDeleteButton>
        </StyledButtonRow>
      </StyledModal>
    </StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  min-width: 300px;
`;

const StyledButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`;
const StyledCancelButton = styled.button``;
const StyledDeleteButton = styled.button``;
