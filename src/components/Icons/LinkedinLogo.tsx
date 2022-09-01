interface Props {
  href: string;
}

const LinkedinLogo = ({ href }: Props) => (
  <a href={href}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95433 31.0457 0 20 0ZM9.60133 16.5648H14.1338V30.183H9.60133V16.5648ZM14.4323 12.3522C14.4029 11.017 13.4481 10 11.8975 10C10.347 10 9.33333 11.017 9.33333 12.3522C9.33333 13.6598 10.3171 14.7061 11.8387 14.7061H11.8677C13.4481 14.7061 14.4323 13.6598 14.4323 12.3522ZM25.2609 16.2451C28.2435 16.2451 30.4795 18.1919 30.4795 22.3748L30.4793 30.183H25.9471V22.8972C25.9471 21.0672 25.2912 19.8185 23.6504 19.8185C22.3983 19.8185 21.6524 20.6603 21.3248 21.4735C21.205 21.7648 21.1756 22.1708 21.1756 22.5778V30.1833H16.6426C16.6426 30.1833 16.7023 17.8431 16.6426 16.5652H21.1756V18.4941C21.7771 17.5668 22.8545 16.2451 25.2609 16.2451Z"
        fill="#343090"
      />
    </svg>
  </a>
);

export default LinkedinLogo;
