import { h } from "preact";
import { useState } from "preact/hooks";
import Icon from "./Icon";
import Button from "./Button";
import styles from "./Settings.module.css";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  numberOfShades: number;
  onShadesChange: (shades: number) => void;
  onReset: Function;
}

const Settings = ({
  isOpen,
  onClose,
  numberOfShades,
  onShadesChange,
  onReset,
}: SettingsProps) => {
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [showShadesConfirmation, setShowShadesConfirmation] = useState(false);
  const [pendingShades, setPendingShades] = useState<number | null>(null);

  const handleShadesClick = (shades: number) => {
    if (shades !== numberOfShades) {
      setPendingShades(shades);
      setShowShadesConfirmation(true);
    }
  };

  const handleConfirmShadesChange = () => {
    if (pendingShades) {
      onShadesChange(pendingShades);
    }
    setShowShadesConfirmation(false);
    setPendingShades(null);
  };

  const handleCancelShadesChange = () => {
    setShowShadesConfirmation(false);
    setPendingShades(null);
  };

  const handleResetClick = () => {
    setShowResetConfirmation(true);
  };

  const handleConfirmReset = () => {
    onReset();
    setShowResetConfirmation(false);
    onClose();
  };

  const handleCancelReset = () => {
    setShowResetConfirmation(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 className={styles.title}>Settings</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon className="close-icon" type="close" style={{width: "1rem", height: "1rem"}} iconColor="#666" />
          </button>
        </div>
        
        <div className={styles.content}>
          {/* Temporarily hiding stepCount settings
          <div className={styles.setting}>
            <h3 className={styles.settingTitle}>Number of Shades</h3>
            <p className={styles.settingDescription}>
              Choose how many color shades to generate for each palette
            </p>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="shades"
                  value={11}
                  checked={numberOfShades === 11}
                  onChange={() => handleShadesClick(11)}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>
                  11 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
                </span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="shades"
                  value={18}
                  checked={numberOfShades === 18}
                  onChange={() => handleShadesClick(18)}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>
                  18 shades (includes 150, 250, 350, 450, 550, 650, 750, 850)
                </span>
              </label>
            </div>
          </div>

          <div className={styles.divider}></div>
          */}

          <div className={styles.setting}>
            <h3 className={styles.settingTitle}>Reset All Data</h3>
            <p className={styles.settingDescription}>
              This will permanently delete all your color palettes and return the plugin to its initial state. This action cannot be undone.
            </p>
            <Button
              text="Clear All Palettes"
              buttonType="primary"
              iconType="trash"
              onClick={handleResetClick}
            />
          </div>
        </div>

        {showShadesConfirmation && (
          <div className={styles.confirmationOverlay}>
            <div className={styles.confirmationModal}>
              <h3 className={styles.confirmationTitle}>Recalculate All Palettes?</h3>
              <p className={styles.confirmationText}>
                Changing the number of shades will regenerate all existing palettes with {pendingShades} shades each. This will preserve your seed colors but recalculate all other shades.
              </p>
              <div className={styles.confirmationButtons}>
                <Button
                  text="Cancel"
                  buttonType="outline"
                  onClick={handleCancelShadesChange}
                />
                <Button
                  text="Recalculate Palettes"
                  buttonType="primary"
                  onClick={handleConfirmShadesChange}
                />
              </div>
            </div>
          </div>
        )}

        {showResetConfirmation && (
          <div className={styles.confirmationOverlay}>
            <div className={styles.confirmationModal}>
              <h3 className={styles.confirmationTitle}>Confirm Reset</h3>
              <p className={styles.confirmationText}>
                Are you sure you want to delete all palettes? This action cannot be undone.
              </p>
              <div className={styles.confirmationButtons}>
                <Button
                  text="Cancel"
                  buttonType="outline"
                  onClick={handleCancelReset}
                />
                <Button
                  text="Delete All"
                  buttonType="primary"
                  iconType="trash"
                  onClick={handleConfirmReset}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;