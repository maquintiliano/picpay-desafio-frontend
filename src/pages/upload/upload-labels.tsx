import * as React from 'react';
import {
  LabelDescriptionButton,
  LabelSubtitleButton,
} from '@/components/label';
import UploadIcon from '@/assets/icons/cloud-upload-icon.png';
import {
  checkIsFileValid,
  FileData,
  fileExtensionAndSizeIsValid,
  handleGTMTypeError,
} from '@/services/files';
import { sendEvent } from '@/services/tracking';

interface IUploadLabels {
  fileType: string;
  fileData?: FileData;
  selectedDoc: string;
}

export const UploadLabels = ({
  fileType,
  fileData,
  selectedDoc,
}: IUploadLabels): JSX.Element => {
  const sendEventWithAction = (action: string) => {
    if (!action) {
      return;
    }
    sendEvent('know-your-costumer', 'enviar-documento', action);
  };

  const handleFileExtensionAndSizeError = (
    fileData: FileData | undefined,
    fileType: string,
  ) => {
    if (fileData && checkIsFileValid(fileData)) return fileData?.name;

    const errorLabel = fileType === 'Frente' ? 'frente' : 'verso';

    sendEventWithAction(
      `erro-${errorLabel}-${selectedDoc}-${handleGTMTypeError(
        fileData?.validExtension,
        fileData?.validSize,
      )}`,
    );

    return 'Ops! A foto enviada é diferente do formato \n ou tamanho aceito. Envie uma nova foto.';
  };

  const handleFileDataLabel = (
    fileData: FileData | undefined,
    fileType: string,
  ) => {
    if (fileData === undefined) {
      return 'Clique para enviar ou arraste a foto aqui.';
    }
    return handleFileExtensionAndSizeError(fileData, fileType);
  };

  return (
    <>
      <LabelSubtitleButton
        className={` ${fileData !== undefined ? 'tiny' : ''}`}
      >
        {fileData === undefined && <img src={UploadIcon} />}
        {`${fileType} do documento`}
      </LabelSubtitleButton>
      <LabelDescriptionButton
        data-testid={`uploaded-label-${fileType.toLowerCase()}`}
        className={`${fileExtensionAndSizeIsValid(fileData)}`}
      >
        {handleFileDataLabel(fileData, fileType)}
      </LabelDescriptionButton>
    </>
  );
};
