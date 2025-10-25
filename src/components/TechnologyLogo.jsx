import Image from "next/image";
import { memo } from "react";
import dbtLogo from "@/assets/images/technology-page/tech-logos/images/dbt.svg?url";
import pandasLogo from "@/assets/images/technology-page/tech-logos/images/pandas.svg?url";
import tensorflowLogo from "@/assets/images/technology-page/tech-logos/images/tensorflow.svg?url";
import huggingFaceLogo from "@/assets/images/technology-page/tech-logos/images/hugging-face.svg?url";
import sklearnLogo from "@/assets/images/technology-page/tech-logos/images/scikit-learn.svg?url";
import pytorchLogo from "@/assets/images/technology-page/tech-logos/images/pytorch.svg?url";
import kafkaLogo from "@/assets/images/technology-page/tech-logos/images/kafka.svg?url";
import sparkLogo from "@/assets/images/technology-page/tech-logos/images/spark.svg?url";
import airflowLogo from "@/assets/images/technology-page/tech-logos/images/airflow.svg?url";
import opencvLogo from "@/assets/images/technology-page/tech-logos/images/opencv.svg?url";
import langchainLogo from "@/assets/images/technology-page/tech-logos/images/langchain.svg?url";
import spacyLogo from "@/assets/images/technology-page/tech-logos/images/spacy.svg?url";
import nltkLogo from "@/assets/images/technology-page/tech-logos/images/nltk.svg?url";
import fasttextLogo from "@/assets/images/technology-page/tech-logos/images/fasttext.svg?url";
import mlflowLogo from "@/assets/images/technology-page/tech-logos/images/mlflow.svg?url";
import weightsBiasesLogo from "@/assets/images/technology-page/tech-logos/images/weights-and-biases.svg?url";
import kubeflowLogo from "@/assets/images/technology-page/tech-logos/images/kubeflow.svg?url";
import vertexLogo from "@/assets/images/technology-page/tech-logos/images/vertex.svg?url";
import openaiLogo from "@/assets/images/technology-page/tech-logos/images/openai.svg?url";
import claudeLogo from "@/assets/images/technology-page/tech-logos/images/claude.svg?url";
import geminiLogo from "@/assets/images/technology-page/tech-logos/images/gemini.svg?url";
import llamaLogo from "@/assets/images/technology-page/tech-logos/images/llama.svg?url";
import mistralLogo from "@/assets/images/technology-page/tech-logos/images/mistral.svg?url";
import sagemakerLogo from "@/assets/images/technology-page/tech-logos/images/sagemaker.svg?url";
import azureMlLogo from "@/assets/images/technology-page/tech-logos/images/azure-ml.svg?url";
import dockerLogo from "@/assets/images/technology-page/tech-logos/images/docker.svg?url";
import kubernetesLogo from "@/assets/images/technology-page/tech-logos/images/kubernetes.svg?url";
import terraformLogo from "@/assets/images/technology-page/tech-logos/images/terraform.svg?url";
import graphqlLogo from "@/assets/images/technology-page/tech-logos/images/graphql.svg?url";
import grpcLogo from "@/assets/images/technology-page/tech-logos/images/grpc.svg?url";
import pineconeLogo from "@/assets/images/technology-page/tech-logos/images/pinecone.svg?url";
import weaviateLogo from "@/assets/images/technology-page/tech-logos/images/weaviate.svg?url";
import qdrantLogo from "@/assets/images/technology-page/tech-logos/images/qdrant.svg?url";

// Create a mapping of logo names to their imported images
const logoMap = {
  "dbt.svg": dbtLogo,
  "pandas.svg": pandasLogo,
  "tensorflow.svg": tensorflowLogo,
  "hugging-face.svg": huggingFaceLogo,
  "scikit-learn.svg": sklearnLogo,
  "pytorch.svg": pytorchLogo,
  "kafka.svg": kafkaLogo,
  "spark.svg": sparkLogo,
  "airflow.svg": airflowLogo,
  "opencv.svg": opencvLogo,
  "langchain.svg": langchainLogo,
  "spacy.svg": spacyLogo,
  "nltk.svg": nltkLogo,
  "fasttext.svg": fasttextLogo,
  "mlflow.svg": mlflowLogo,
  "weights-and-biases.svg": weightsBiasesLogo,
  "kubeflow.svg": kubeflowLogo,
  "vertex.svg": vertexLogo,
  "openai.svg": openaiLogo,
  "claude.svg": claudeLogo,
  "gemini.svg": geminiLogo,
  "llama.svg": llamaLogo,
  "mistral.svg": mistralLogo,
  "sagemaker.svg": sagemakerLogo,
  "azure-ml.svg": azureMlLogo,
  "docker.svg": dockerLogo,
  "kubernetes.svg": kubernetesLogo,
  "terraform.svg": terraformLogo,
  "graphql.svg": graphqlLogo,
  "grpc.svg": grpcLogo,
  "pinecone.svg": pineconeLogo,
  "weaviate.svg": weaviateLogo,
  "qdrant.svg": qdrantLogo,
};

const TechnologyLogo = ({ iconSrc, alt }) => {
  const logoFileName = iconSrc?.split("/").pop();
  const importedLogo = logoFileName && logoMap[logoFileName];
  const logoSource = importedLogo || iconSrc;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={logoSource}
        alt={alt || logoFileName?.replace(".svg", "")}
        width={80}
        height={71}
        className="max-w-full max-h-full object-contain"
        priority={true}
      />
    </div>
  );
};

export default memo(TechnologyLogo);
